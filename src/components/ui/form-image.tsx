import { ChangeEvent } from "react";
import { ImagePlus } from "lucide-react";
import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormImageProps {
  isLoading?: boolean;
  handleImage: (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => void;
  name: string;
}

export const FormImage = ({ isLoading, handleImage, name }: FormImageProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="cursor-pointer h-[250px] w-full border-dashed border rounded-md flex justify-center items-center overflow-hidden">
            {field.value ? (
              <div className="h-auto w-32 overflow-hidden">
                <img
                  src={field.value}
                  alt="Icon"
                  className="object-contain"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            ) : (
              <ImagePlus
                strokeWidth={0.5}
                className="w-20 h-20 text-muted-foreground"
              />
            )}
          </FormLabel>
          <FormControl>
            <Input
              className="w-full h-full hidden"
              type="file"
              accept="image/*"
              disabled={isLoading}
              onChange={(e) => handleImage(e, field.onChange)}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
