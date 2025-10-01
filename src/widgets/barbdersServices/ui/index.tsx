import React from "react";
import { servicesList } from "../model";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const BarbersServices = () => {
  return (
    <section className="py-7 text-white">
      <div className="max-w-[1240px] mx-auto px-5">
        <h1 className="pt-10 text-4xl md:text-6xl font-accent text-center">
          Barbershop Services
        </h1>

        <div className="flex justify-center py-10">
          <div className="w-full max-w-[600px] overflow-x-auto">
            <Table className="w-full rounded-lg overflow-hidden">
              <TableHeader>
                <TableRow>
                  <TableHead className="px-2 md:px-4 py-2 text-left text-white text-base px]">
                    Service
                  </TableHead>
                  <TableHead className="px-2 md:px-4 py-2 text-right text-white text-base ">
                    Price
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {servicesList.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell className="px-2 md:px-4 py-2 text-white font-medium text-sm">
                      {service.name}
                    </TableCell>
                    <TableCell className="px-2 md:px-4 py-2 text-white text-right text-sm">
                      ${service.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarbersServices;
