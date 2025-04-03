
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Layout from "@/components/Layout";
import { useToast } from "@/components/ui/use-toast";

// In a real app, this would be a MongoDB connection setup
// For now, we'll use localStorage to simulate a database
const simulateMongoDBConnection = () => {
  console.log("Connected to MongoDB (simulated)");
  return {
    connected: true,
    url: "mongodb://localhost:27017/styleSenseDB"
  };
};

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [dbConnection, setDbConnection] = useState<{connected: boolean, url: string} | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Simulate connecting to MongoDB on component mount
  useEffect(() => {
    const connection = simulateMongoDBConnection();
    setDbConnection(connection);
    console.log("MongoDB connection status:", connection.connected);
  }, []);

  // Check if user is already logged in
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Check if email already exists
      const existingUser = localStorage.getItem(`user_${email}`);
      if (existingUser) {
        setError("An account with this email already exists.");
        setIsLoading(false);
        toast({
          title: "Registration failed",
          description: "An account with this email already exists.",
          variant: "destructive",
        });
        return;
      }

      // In a real app, we would hash the password before storing it
      // For demo purposes, we'll store it as is (NEVER do this in production)
      const userData = {
        name,
        email,
        password, // In production: await bcrypt.hash(password, 10)
        createdAt: new Date().toISOString(),
        measurements: {
          height: "",
          weight: "",
          hipSize: "",
          skinTone: "",
          bodyType: ""
        },
        outfitHistory: []
      };

      // Store user data in localStorage (for demo only)
      // In a real app, we would store this in MongoDB
      localStorage.setItem(`user_${email}`, JSON.stringify(userData));
      
      // Set the user as logged in
      localStorage.setItem("currentUser", JSON.stringify({
        email: userData.email,
        name: userData.name
      }));
      
      console.log("Registration successful for:", email);
      setIsLoading(false);
      
      toast({
        title: "Account created",
        description: "Your account has been created successfully!",
      });
      
      navigate("/dashboard");
    } catch (err) {
      console.error("Registration error:", err);
      setIsLoading(false);
      setError("An error occurred. Please try again.");
      toast({
        title: "Registration failed",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto px-4 py-16">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
            <CardDescription className="text-center">
              Enter your information to create your account
            </CardDescription>
            {dbConnection && dbConnection.connected && (
              <div className="text-xs text-green-600 text-center">
                Connected to: {dbConnection.url}
              </div>
            )}
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
                  {error}
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="m@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <p className="text-xs text-gray-500">Password must be at least 8 characters long</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm font-normal">
                  I agree to the{" "}
                  <Link to="/terms" className="text-indigo-600 hover:text-indigo-800">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-indigo-600 hover:text-indigo-800">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
              
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
              
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Login
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Signup;
