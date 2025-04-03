
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";

// Mock user data
const initialUserData = {
  name: "John Doe",
  email: "john.doe@example.com",
  height: "178",
  weight: "75",
  hipSize: "92",
  skinTone: "medium",
  bodyType: "athletic",
};

// Mock outfit history
const outfitHistory = [
  {
    id: 1,
    date: "2025-03-25",
    outfitName: "Casual Summer Look",
    items: ["Light blue linen shirt", "Beige chino shorts", "White canvas sneakers"],
    rating: 5,
  },
  {
    id: 2,
    date: "2025-03-20",
    outfitName: "Business Casual Ensemble",
    items: ["Navy blue blazer", "Light blue oxford shirt", "Gray chinos", "Brown leather loafers"],
    rating: 4,
  },
  {
    id: 3,
    date: "2025-03-15",
    outfitName: "Urban Streetwear",
    items: ["Black graphic t-shirt", "Distressed jeans", "White sneakers", "Black bomber jacket"],
    rating: 3,
  },
];

// Mock fashion insights
const fashionInsights = {
  preferredColors: ["Blue", "Gray", "Earth tones"],
  preferredStyles: ["Smart Casual", "Minimalist", "Classic"],
  seasonalRecommendations: {
    spring: "Light layers in natural tones with occasional pops of color.",
    summer: "Breathable fabrics in light colors to keep cool while staying stylish.",
    fall: "Earth tones with medium-weight layers and textured fabrics.",
    winter: "Dark, rich colors with heavier fabrics and strategic layering.",
  },
  styleGuide: {
    do: [
      "Wear well-fitted clothes that complement your athletic build",
      "Opt for clothes with structure in the shoulder area",
      "Choose colors that complement your medium skin tone like blues, greens, and warm neutrals",
    ],
    dont: [
      "Avoid overly baggy clothes that hide your physique",
      "Stay away from overly bright or neon colors",
      "Avoid extremely tight clothes that restrict movement",
    ],
  },
};

const Dashboard = () => {
  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(initialUserData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveProfile = () => {
    setUserData(formData);
    setIsEditing(false);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>
        
        <Tabs defaultValue="profile" className="space-y-8">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="history">Outfit History</TabsTrigger>
            <TabsTrigger value="insights">Fashion Insights</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Your Profile</CardTitle>
                <CardDescription>
                  View and update your personal information to get better outfit recommendations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          disabled
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="height">Height (cm)</Label>
                        <Input
                          id="height"
                          name="height"
                          value={formData.height}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="weight">Weight (kg)</Label>
                        <Input
                          id="weight"
                          name="weight"
                          value={formData.weight}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="hipSize">Hip Size (cm)</Label>
                        <Input
                          id="hipSize"
                          name="hipSize"
                          value={formData.hipSize}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="skinTone">Skin Tone</Label>
                        <select
                          id="skinTone"
                          name="skinTone"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                          value={formData.skinTone}
                          onChange={(e) => setFormData({...formData, skinTone: e.target.value})}
                        >
                          <option value="fair">Fair</option>
                          <option value="medium">Medium</option>
                          <option value="dark">Dark</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bodyType">Body Type</Label>
                        <select
                          id="bodyType"
                          name="bodyType"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                          value={formData.bodyType}
                          onChange={(e) => setFormData({...formData, bodyType: e.target.value})}
                        >
                          <option value="slim">Slim</option>
                          <option value="athletic">Athletic</option>
                          <option value="average">Average</option>
                          <option value="plusSize">Plus Size</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-4">
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleSaveProfile}>
                        Save Changes
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                        <p className="mt-1 text-lg">{userData.name}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Email</h3>
                        <p className="mt-1 text-lg">{userData.email}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Height</h3>
                        <p className="mt-1 text-lg">{userData.height} cm</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Weight</h3>
                        <p className="mt-1 text-lg">{userData.weight} kg</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Hip Size</h3>
                        <p className="mt-1 text-lg">{userData.hipSize} cm</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Skin Tone</h3>
                        <p className="mt-1 text-lg capitalize">{userData.skinTone}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Body Type</h3>
                        <p className="mt-1 text-lg capitalize">{userData.bodyType}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button onClick={() => setIsEditing(true)}>
                        Edit Profile
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Your Outfit History</CardTitle>
                <CardDescription>
                  View your past outfit recommendations and ratings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {outfitHistory.map((outfit) => (
                    <div key={outfit.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium">{outfit.outfitName}</h3>
                          <p className="text-sm text-gray-500">{outfit.date}</p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm font-medium mr-2">Rating:</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-5 h-5 ${i < outfit.rating ? "text-yellow-400" : "text-gray-300"}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Items:</h4>
                        <ul className="list-disc pl-5 text-gray-600">
                          {outfit.items.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="insights">
            <Card>
              <CardHeader>
                <CardTitle>Your Fashion Insights</CardTitle>
                <CardDescription>
                  Personalized style analysis based on your profile and preferences.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Your Preferred Colors</h3>
                    <div className="flex flex-wrap gap-2">
                      {fashionInsights.preferredColors.map((color, index) => (
                        <span key={index} className="px-3 py-1 bg-indigo-50 text-indigo-800 rounded-full">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Your Preferred Styles</h3>
                    <div className="flex flex-wrap gap-2">
                      {fashionInsights.preferredStyles.map((style, index) => (
                        <span key={index} className="px-3 py-1 bg-indigo-50 text-indigo-800 rounded-full">
                          {style}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Seasonal Recommendations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2 capitalize">Spring</h4>
                        <p className="text-gray-700">{fashionInsights.seasonalRecommendations.spring}</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2 capitalize">Summer</h4>
                        <p className="text-gray-700">{fashionInsights.seasonalRecommendations.summer}</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2 capitalize">Fall</h4>
                        <p className="text-gray-700">{fashionInsights.seasonalRecommendations.fall}</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2 capitalize">Winter</h4>
                        <p className="text-gray-700">{fashionInsights.seasonalRecommendations.winter}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Style Do's & Don'ts for Your Body Type</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-green-600 mb-2">Do:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          {fashionInsights.styleGuide.do.map((item, index) => (
                            <li key={index} className="text-gray-700">{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-red-600 mb-2">Don't:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          {fashionInsights.styleGuide.dont.map((item, index) => (
                            <li key={index} className="text-gray-700">{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Dashboard;
