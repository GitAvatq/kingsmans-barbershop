"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetServicesQuery } from "@/app/services/api";
import ServicesListSkeleton from "./skeleton";

const BarbersServices = () => {
  const { data, isLoading, isError } = useGetServicesQuery();

  return (
    <section className="py-7 text-white">
      <div className="max-w-[1240px] mx-auto px-5">
        <h1 className="pt-10 max-md:text-4xl text-6xl font-accent text-center">
          Barbershop Services
        </h1>

        <div className="flex justify-center py-10">
          <div className="w-full max-w-[600px] overflow-x-auto">
            <Table className="w-full rounded-lg overflow-hidden">
              <TableHeader>
                <TableRow>
                  <TableHead className="px-2 md:px-4 py-2 text-left text-white text-base">
                    Service
                  </TableHead>
                  <TableHead className="px-2 md:px-4 py-2 text-right text-white text-base">
                    Price
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {isLoading ? (
                  <ServicesListSkeleton />
                ) : isError ? (
                  <TableRow>
                    <TableCell
                      colSpan={2}
                      className="text-center text-red-400 py-4"
                    >
                      Failed to load services 😢
                    </TableCell>
                  </TableRow>
                ) : data && data.length > 0 ? (
                  data.map((service) => (
                    <TableRow key={service.id}>
                      <TableCell className="px-2 md:px-4 py-2 text-white font-medium text-sm">
                        {service.name}
                      </TableCell>
                      <TableCell className="px-2 md:px-4 py-2 text-white text-right text-sm">
                        ${service.price}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={2}
                      className="text-center text-gray-400 py-4"
                    >
                      No services found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarbersServices;
