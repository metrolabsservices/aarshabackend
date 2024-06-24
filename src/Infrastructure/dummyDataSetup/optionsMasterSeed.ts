export const optionsMasterData: any = {
  boardTypes: ["ICSE", "CBSE", "SSC"],
  subjectTypes: [
    "Telugu",
    "Hindi",
    "English",
    "Maths",
    "Physics",
    "Chemistry",
    "Biology",
    "Social",
    "Science",
    "Others",
  ],
  studentStatusTypes: ["away", "active", "inactive"],
  gradeTypes: Array.from(
    { length: 10 },
    (_, index) => "Class-" + String(index + 1)
  ),
  paymentTypes: [
    "Card",
    "Cash",
    "Phone Pay",
    "Google Pay",
    "Paytm",
    "Cred",
    "Bank Transfer",
    "Others",
  ],
  transactionsCategoryTypes: [
    { category: "Library Membership", transactionType: "credit" },
    { category: "Stationary Parchase", transactionType: "debit" },
    { category: "Stationary Sale", transactionType: "credit" },
    { category: "Salaries", transactionType: "debit" },
    { category: "Rent", transactionType: "debit" },
    { category: "Student Fee", transactionType: "credit" },
    { category: "Electricity", transactionType: "debit" },
    { category: "Water", transactionType: "debit" },
    { category: "Maintenance", transactionType: "debit" },
  ],
  transactionTypes: [
    "Pending",
    "Processing",
    "Completed",
    "Failed",
    "Refunded",
    "Cancelled",
    "On Hold",
    "Reversed",
    "Pending Review",
    "Others",
  ],
  transactionCategories: [
    "Tuition",
    "Stationery",
    "Activity",
    "Library",
    "Salaries",
    "Utilities",
    "Repairs",
    "Furniture",
    "Technology",
    "Events",
    "Refund",
    "Others",
  ],
  transactionMode: ["Debit", "Credit", "Others"],
};
