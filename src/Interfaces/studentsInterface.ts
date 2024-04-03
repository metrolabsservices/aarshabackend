import { FeeCharge, Student } from "@prisma/client";

export type subjectStatisticsInterface = {
  id: number;
  subjectName: string;
  studentId: number;
  subjectScores: string[];
};

export type feeDetailsInterface = {
  id: number;
  paidAmount: number;
  subjectsTaken: string[];
  dateOfPaid: Date;
  monthOfPaid: number;
  studentId: number;
};
export type feeChargesInterface = {
  id: number;
  amount: number;
  chargedMonth: number;
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
  feeCharge: feeChargesInterface[] | null;
  feeDetails: feeDetailsInterface[] | null;
  subjectStatistics: subjectStatisticsInterface[] | null;
};

export type studentUpdateInterface = {
  name?: string;
  classNo?: string;
  schoolName?: string;
  boardType?: string;
  studentStatus?: string;
  pastScore?: number;
  subjectsTaken?: string[];
  joiningDate?: Date;
  timing?: string;
  parentName?: string;
  parentPhnNo?: string;
  whatsappNo?: string;
  isDeleted?: boolean;
  dueAmount?: number;
};

export type studentCreateInterface = {
  name: string;
  classNo: string;
  schoolName: string;
  boardType: string;
  studentStatus: string;
  pastScore: number;
  subjectsTaken: string[];
  joiningDate: Date;
  timing: string;
  parentName: string;
  parentPhnNo: string;
  whatsappNo: string;
  isDeleted: boolean;
  dueAmount: number;
};

export type ServiceResponse = {
  response: string;
  data: any;
};

export type StudentFeeDataInterface = {
  id: number;
  name: string;
  parentName: string;
  feeCharge: {
    id: number;
    amount: number;
    chargedMonth: number;
  };
  feeDetails: {
    id: number;
    subjectsTaken: string[];
    paidAmount: number;
    dateOfPaid: Date;
    monthOfPaid: number;
  };
};

export type ModifiedStudentInterface = Omit<Student, "id">;
export type NewStudent = {
  name: string;
  classNo: string;
  schoolName: string;
  boardType: string;
  studentStatus: string;
  pastScore: number;
  joiningDate: Date;
  timing: string;
  parentName: string;
  parentPhnNo: string;
  whatsappNo: string;
  isDeleted: boolean;
  subjectsTaken: string[];
  dueAmount: number;

  feeCharge: {
    amount: number;
    dateOfCharged: Date;
    studentId: number;
  };
};
