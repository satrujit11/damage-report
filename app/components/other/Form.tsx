import { damageReportFormSchema, type DamageReportFormSchema } from "~/schemas/damageReportform.schema";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { ComboboxDemo } from "../combocomponents/searchAndSelect";
import { vendors } from "~/datas/vendors";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { FileUpload } from "../combocomponents/multiFileUpload";
import { Separator } from "../ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";


const DamageReportForm = () => {
  const form = useForm<DamageReportFormSchema>({
    resolver: zodResolver(damageReportFormSchema),
    defaultValues: {
      vin_number: "",
      rider_name: "",
      rider_number: "",
      vendor: "",
      type: "return",
      damageParts: "",
      totalDamageCost: "",
      paymentStatus: "paid",
    }
  })

  function onSubmit(values: DamageReportFormSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <section className="bg-gray-100 min-h-screen">
      <div className="bg-white border-b sticky top-0">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-semibold text-center">Under maintenance Data</h1>
        </div>
      </div>
      <div className="container mx-auto bg-white h-full p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Rider Details</CardTitle>
                <CardDescription>Fill in the rider details.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField control={form.control} name="vin_number" render={({ field }) => (
                  <FormItem>
                    <FormLabel>VIN Number</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="VIN123" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="rider_name" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rider Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Aniket Tripathy" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="rider_number" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rider Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+91 123456789" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Damage Details</CardTitle>
                <CardDescription>Fill in the damage details.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-[1fr_auto_1fr] gap-4">
                  <FormField control={form.control} name="vendor" render={({ field }) => (
                    <FormItem className="flex flex-col justify-between space-y-3">
                      <FormLabel>Select Vendor</FormLabel>
                      <FormControl>
                        <ComboboxDemo
                          frameworks={vendors}
                          name="vendor"
                          control={form.control}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />


                  <Separator orientation="vertical" />
                  <FormField control={form.control} name="damageParts" render={({ field }) => (
                    <FormItem className="flex flex-col justify-between space-y-3">
                      <FormLabel>Damage Parts</FormLabel>
                      <FormControl>
                        <ComboboxDemo
                          frameworks={vendors}
                          name="parts"
                          control={form.control}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                </div>


                <FormField control={form.control} name="totalDamageCost" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Damage Cost</FormLabel>
                    <FormControl>
                      <Input placeholder="1000" {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <div className="grid grid-cols-[1fr_auto_1fr] gap-4">

                  {/* Type */}
                  <FormField control={form.control} name="type" render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Type</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="grid grid-cols-2 gap-2"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="return" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Return
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="recover" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Recover
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <Separator orientation="vertical" />

                  <FormField control={form.control} name="paymentStatus" render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Payment Status</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="grid grid-cols-2 gap-2"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="paid" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Paid
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="unpaid" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Unpaid
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                </div>

              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Damage Verification</CardTitle>
                <CardDescription>Upload the damage photos and videos for verification.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">

                <FileUpload control={form.control} name="clustorPhotos" />

                {/* Cluster Photos */}
                <FormField control={form.control} name="damageVideo" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Damage Video</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="video/*"
                        placeholder="Select a video"
                        onChange={(e) => {
                          const file = e.target.files ? e.target.files[0] : null;
                          field.onChange(file); // Only accept a single file
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </CardContent>
            </Card>


            <div className="pt-4">
              <Button type="submit" className="w-full">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  )
}

export default DamageReportForm
