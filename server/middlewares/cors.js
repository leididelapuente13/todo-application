const CorsConfig = {
  origin: [
    "http://localhost:5173",
    "http://localhost:8080",
    "http://localhost:7070"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};

export default CorsConfig;
