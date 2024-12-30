import { useController, type UseFormReturn } from "react-hook-form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { UploadIcon, XIcon } from "lucide-react"
import { FormLabel } from "../ui/form"

type FileUploadProps = {
  control: any
  name: string
}

export const FileUpload = ({ control, name }: FileUploadProps) => {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue: [],
  })

  // Handle file selection
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      field.onChange(Array.from(files)) // Convert FileList to Array
    }
  }

  // Handle file removal
  const removeFile = (index: number) => {
    const updatedFiles = field.value.filter((_: any, i: number) => i !== index)
    field.onChange(updatedFiles)
  }

  return (
    <div>
      <div className="space-y-2">
        <FormLabel>Cluster Photos</FormLabel>
        <Input
          type="file"
          multiple
          accept="image/*"
          onChange={onFileChange}
          className="mb-4"
        />
        <p className="text-sm text-gray-500">You can upload multiple images.</p>
      </div>

      {/* Display Selected Files */}
      <div className="grid gap-2">
        {field.value?.map((file: File, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-3 dark:bg-gray-800"
          >
            <div className="flex items-center gap-3">
              <UploadIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <div>
                <div className="font-medium text-gray-900 dark:text-gray-50">{file.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{`${(
                  file.size / 1024 / 1024
                ).toFixed(2)} MB`}</div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              onClick={() => removeFile(index)} // Remove file on button click
            >
              <XIcon className="h-5 w-5" />
              <span className="sr-only">Remove {file.name}</span>
            </Button>
          </div>
        ))}
      </div>

      {/* Show error message if any */}
      {fieldState?.error?.message && (
        <p className="text-red-500 text-sm mt-2">{fieldState.error.message}</p>
      )}
    </div>
  )
}

