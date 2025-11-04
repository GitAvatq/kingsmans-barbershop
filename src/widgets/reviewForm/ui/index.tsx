"use client"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
} from "@/components/ui/field";
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { useCreateReviewMutation } from "@/app/services/ui/rewievs/api";
import { Input } from "@/components/ui/input";

const ReviewForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        text: "",
        location: ""
    })

    const [createReview, { data, isLoading, isError }] = useCreateReviewMutation()
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createReview(formData)
        setFormData({
            name: "",
            image: "",
            text: "",
            location: ""
        })
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }
    if (isError) {
        return <p className="text-red-400 text-start py-3">An error has occured!</p>
    }

    return (
        <div className="w-1/2 text-white py-10 px-10 max-w-[1240px] mx-auto">
            <form onSubmit={handleSubmit}>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Feedback</FieldLegend>
                        <FieldDescription>
                            Share your thoughts about our service.
                        </FieldDescription>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="image">
                                    Avatar
                                </FieldLabel>
                                <input
                                    className="py-1.5 text-xxs rounded-xl px-2 border border-white"
                                    name="image"
                                    id="image"
                                    placeholder="Enter image"
                                    onChange={handleChange}
                                    required
                                />
                                <FieldDescription>
                                    Please paste only the image URL.
                                </FieldDescription>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="name">
                                    Name
                                </FieldLabel>
                                <Input
                                    name="name"
                                    id="name"
                                    placeholder="Enter name"
                                    onChange={handleChange}
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="location">
                                    Location
                                </FieldLabel>
                                <Input
                                    name="location"
                                    id="location"
                                    placeholder="Enter location"
                                    onChange={handleChange}
                                    required
                                />
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <FieldSeparator />
                    <FieldSet>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="text">
                                    Comments
                                </FieldLabel>
                                <Textarea
                                    name="text"
                                    id="text"
                                    placeholder="Add any additional comments"
                                    onChange={handleChange}
                                    className="resize-none"
                                />
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <Field orientation="horizontal">
                        <Button type="submit" className="cursor-pointer bg-accent duration-300 hover:bg-gold">{isLoading ? "Creating..." : "Submit"}</Button>
                    </Field>
                </FieldGroup>
            </form>
        </div>
    );
};

export default ReviewForm;



