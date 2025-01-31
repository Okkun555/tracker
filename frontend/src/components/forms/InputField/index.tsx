import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import FieldWrapper, {FieldWrapperPassThroughProps} from "@/components/forms/FieldWrapper";
import {TextField, TextFieldProps} from "@mui/material";

type InputFieldProps<T extends FieldValues> = {
    fieldWrapperProps: FieldWrapperPassThroughProps
} & Pick<UseControllerProps<T>, "name" | "control"> & Pick<TextFieldProps, "type" | "variant" | "size" | "placeholder" | "sx">

export default function InputField<T extends FieldValues>({
    fieldWrapperProps,
    name,
    control,
    type = "text",
    variant = "outlined",
    size = "small",
    placeholder,
    sx = undefined
 }: InputFieldProps<T>) {
    const { field, formState: { errors } } = useController({ name, control })

    const errorMessage = errors?.[name]?.message as string

    return (
        <FieldWrapper {...fieldWrapperProps} errorMessage={errorMessage}>
            <TextField
                type={type}
                value={field.value ?? ""}
                inputRef={field.ref}
                name={field.name}
                onChange={field.onChange}
                onBlur={field.onBlur}
                variant={variant}
                size={size}
                placeholder={placeholder}
                sx={sx}
                error={!!errorMessage}
            />
        </FieldWrapper>
    )
}
