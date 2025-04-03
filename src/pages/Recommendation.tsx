
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import Layout from "@/components/Layout";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the form schema
const formSchema = z.object({
  height: z.string().min(1, { message: "Height is required" }),
  weight: z.string().min(1, { message: "Weight is required" }),
  hipSize: z.string().min(1, { message: "Hip size is required" }),
  skinTone: z.enum(["fair", "medium", "dark"], {
    required_error: "Please select a skin tone",
  }),
  bodyType: z.enum(["slim", "athletic", "average", "plusSize"], {
    required_error: "Please select a body type",
  }),
  weather: z.enum(["sunny", "rainy", "cold", "warm"], {
    required_error: "Please select current weather",
  }),
});

type FormValues = z.infer<typeof formSchema>;

// Mock recommendation generator function (this would be replaced with actual AI API call)
const generateRecommendation = (data: FormValues) => {
  const recommendations = [
    {
      outfitName: "Casual Summer Look",
      clothingItems: ["Light blue linen shirt", "Beige chino shorts", "White canvas sneakers", "Minimal brown leather watch"],
      recommendedColors: ["Light blue", "Beige", "White", "Earth tones"],
      weatherSuitability: "Perfect for warm and sunny days. The lightweight linen will keep you cool while still looking stylish.",
      styleTips: "Roll up the sleeves for a more relaxed look. Pair with sunglasses for both style and sun protection."
    },
    {
      outfitName: "Business Casual Ensemble",
      clothingItems: ["Navy blue blazer", "Light blue oxford shirt", "Gray chinos", "Brown leather loafers"],
      recommendedColors: ["Navy", "Light blue", "Gray", "Brown"],
      weatherSuitability: "Suitable for mild to warm weather. The blazer can be removed if temperatures rise.",
      styleTips: "Keep the blazer unbuttoned for a more relaxed look. Add a pocket square for a touch of sophistication."
    },
    {
      outfitName: "Rainy Day Outfit",
      clothingItems: ["Dark wash jeans", "Charcoal sweater", "Waterproof jacket", "Leather boots"],
      recommendedColors: ["Dark blue", "Charcoal", "Black", "Dark brown"],
      weatherSuitability: "Designed for rainy conditions. The waterproof jacket and boots will keep you dry and comfortable.",
      styleTips: "Layer a t-shirt under the sweater for temperature control. Cuff the jeans slightly to avoid getting them wet."
    }
  ];
  
  // In a real application, we would use the form data to generate personalized recommendations
  // For this demo, we'll return a random recommendation
  return recommendations[Math.floor(Math.random() * recommendations.length)];
};

const Recommendation = () => {
  const [recommendation, setRecommendation] = useState<null | ReturnType<typeof generateRecommendation>>(null);
  const [loading, setLoading] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      height: "",
      weight: "",
      hipSize: "",
      skinTone: "medium",
      bodyType: "average",
      weather: "sunny",
    },
  });

  const onSubmit = (data: FormValues) => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const result = generateRecommendation(data);
      setRecommendation(result);
      setLoading(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Get Personalized Outfit Recommendations</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Your Details</CardTitle>
                <CardDescription>
                  Enter your physical attributes and current weather to get personalized outfit recommendations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="height"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Height (cm)</FormLabel>
                            <FormControl>
                              <Input placeholder="175" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="weight"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Weight (kg)</FormLabel>
                            <FormControl>
                              <Input placeholder="70" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="hipSize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Hip Size (cm)</FormLabel>
                            <FormControl>
                              <Input placeholder="90" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <FormField
                          control={form.control}
                          name="skinTone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Skin Tone</FormLabel>
                              <div className="flex flex-wrap gap-3">
                                {["fair", "medium", "dark"].map((option) => (
                                  <Label
                                    key={option}
                                    className={`flex items-center p-3 border rounded-md cursor-pointer ${
                                      field.value === option
                                        ? "border-indigo-600 bg-indigo-50"
                                        : "border-gray-200"
                                    }`}
                                  >
                                    <input
                                      type="radio"
                                      className="sr-only"
                                      value={option}
                                      checked={field.value === option}
                                      onChange={() => field.onChange(option)}
                                    />
                                    <span className="capitalize">{option}</span>
                                  </Label>
                                ))}
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div>
                        <FormField
                          control={form.control}
                          name="bodyType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Body Type</FormLabel>
                              <div className="flex flex-wrap gap-3">
                                {[
                                  { value: "slim", label: "Slim" },
                                  { value: "athletic", label: "Athletic" },
                                  { value: "average", label: "Average" },
                                  { value: "plusSize", label: "Plus Size" },
                                ].map((option) => (
                                  <Label
                                    key={option.value}
                                    className={`flex items-center p-3 border rounded-md cursor-pointer ${
                                      field.value === option.value
                                        ? "border-indigo-600 bg-indigo-50"
                                        : "border-gray-200"
                                    }`}
                                  >
                                    <input
                                      type="radio"
                                      className="sr-only"
                                      value={option.value}
                                      checked={field.value === option.value}
                                      onChange={() => field.onChange(option.value)}
                                    />
                                    <span>{option.label}</span>
                                  </Label>
                                ))}
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div>
                        <FormField
                          control={form.control}
                          name="weather"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Current Weather</FormLabel>
                              <div className="flex flex-wrap gap-3">
                                {[
                                  { value: "sunny", label: "Sunny" },
                                  { value: "rainy", label: "Rainy" },
                                  { value: "cold", label: "Cold" },
                                  { value: "warm", label: "Warm" },
                                ].map((option) => (
                                  <Label
                                    key={option.value}
                                    className={`flex items-center p-3 border rounded-md cursor-pointer ${
                                      field.value === option.value
                                        ? "border-indigo-600 bg-indigo-50"
                                        : "border-gray-200"
                                    }`}
                                  >
                                    <input
                                      type="radio"
                                      className="sr-only"
                                      value={option.value}
                                      checked={field.value === option.value}
                                      onChange={() => field.onChange(option.value)}
                                    />
                                    <span>{option.label}</span>
                                  </Label>
                                ))}
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? "Generating Recommendations..." : "Get Recommendations"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Your Recommendation</CardTitle>
                <CardDescription>
                  Personalized outfit suggestion based on your attributes and current weather.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="space-y-4">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-32" />
                    <Skeleton className="h-24" />
                    <Skeleton className="h-24" />
                  </div>
                ) : recommendation ? (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-indigo-600">{recommendation.outfitName}</h3>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2">Clothing Items</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        {recommendation.clothingItems.map((item, index) => (
                          <li key={index} className="text-gray-700">{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2">Recommended Colors</h4>
                      <div className="flex flex-wrap gap-2">
                        {recommendation.recommendedColors.map((color, index) => (
                          <span key={index} className="px-3 py-1 bg-indigo-50 text-indigo-800 rounded-full text-sm">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2">Weather Suitability</h4>
                      <p className="text-gray-700">{recommendation.weatherSuitability}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2">Style Tips</h4>
                      <p className="text-gray-700">{recommendation.styleTips}</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <svg className="w-16 h-16 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">No recommendation yet</h3>
                    <p className="mt-2 text-gray-500">Fill out the form and click "Get Recommendations" to see your personalized outfit suggestion.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Recommendation;
