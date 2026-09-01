import "dotenv/config";
import { connectDB } from "./src/config/db";
import { app } from "./src/app";

const startServer = async () => {
  try {
    await connectDB();

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
