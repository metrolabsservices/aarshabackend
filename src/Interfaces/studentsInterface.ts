export type subjectStatisticsInterface = {
  id: number;
  subjectName: string;
  studentId: number;
  subjectScores: string[];
};

export type feeDetailsInterface = {
  id: number;
  amount: number;
  dateOfPaid: Date;
  paidBy: string;
  studentId: number;
};

export type studentInterface = {
  id: number;
  name: string;
  gradeNumber: string;
  schoolName: string;
  boardType: string;
  status: string;
  previousScore: number;
  subjectsAcquired: string[];
  joiningDate: Date;
  duration: string;
  guardianName: string;
  guardianPhoneNumber: string;
  feeCharge: number;
  feeDetails: feeDetailsInterface[] | null;
  subjectStatistics: subjectStatisticsInterface[] | null;
};

export type studentUpdateInterface = {
  name?: string;
  gradeNumber?: string;
  schoolName?: string;
  boardType?: string;
  status?: string;
  previousScore?: number;
  subjectsAcquired?: string[];
  joiningDate?: Date;
  duration?: string;
  guardianName?: string;
  guardianPhoneNumber?: string;
  feeCharge?: number;
};

export type studentCreateInterface = {
  name: string;
  gradeNumber: string;
  schoolName: string;
  boardType: string;
  status: string;
  previousScore: number;
  subjectsAcquired: string[];
  joiningDate: Date;
  duration: string;
  guardianName: string;
  guardianPhoneNumber: string;
  feeCharge: number;
};

export type ServiceResponse = {
  response: string;
  data: any;
};
