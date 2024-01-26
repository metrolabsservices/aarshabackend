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

// {
//   "id": 1,
//   "name": "Jamill",
//   "gradeNumber": "class-8",
//   "schoolName": "Bubbletube",
//   "boardType": "CBSE",
//   "status": "IN-ACTIVE",
//   "previousScore": 97,
//   "subjectsAcquired": [
//     "English",
//     "Telugu"
//   ],
//   "joiningDate": "2023-03-23T10:39:48.000Z",
//   "duration": "4.5",
//   "guardianName": "Siemon",
//   "guardianPhoneNumber": "6515134884",
//   "feeCharge": 9887,
//   "feeDetails": [
//     {
//       "id": 1,
//       "amount": 1638,
//       "dateOfPaid": "2023-02-23T03:03:53.000Z",
//       "paidBy": "Bari",
//       "studentId": 1
//     },
//     {
//       "id": 101,
//       "amount": 8974,
//       "dateOfPaid": "2023-02-14T14:19:20.000Z",
//       "paidBy": "Bowie",
//       "studentId": 1
//     }
//   ],
//   "subjectStatistics": [
//     {
//       "id": 1,
//       "subjectName": "English",
//       "subjectScores": [
//         "81^^^100^^^2023-12-14T05:07:37.026Z^^^class-8",
//         "59^^^100^^^2023-12-14T05:07:37.026Z^^^class-8",
//         "86^^^100^^^2023-12-14T05:07:37.026Z^^^class-8",
//         "61^^^100^^^2023-12-14T05:07:37.026Z^^^class-8",
//         "47^^^100^^^2023-12-14T05:07:37.026Z^^^class-8",
//         "97^^^100^^^2023-12-14T05:07:37.026Z^^^class-8",
//         "26^^^100^^^2023-12-14T05:07:37.026Z^^^class-8",
//         "50^^^100^^^2023-12-14T05:07:37.026Z^^^class-8",
//         "49^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "44^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "99^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "65^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "50^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "56^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "65^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "34^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "74^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "86^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "23^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "86^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "62^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "61^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "12^^^100^^^2023-12-14T05:07:37.027Z^^^class-8"
//       ],
//       "studentId": 1
//     },
//     {
//       "id": 2,
//       "subjectName": "Telugu",
//       "subjectScores": [
//         "47^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "18^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "16^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "78^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "87^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "33^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "10^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "91^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "78^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "59^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "26^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "40^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "64^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "83^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "20^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "76^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "14^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "18^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "20^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "62^^^100^^^2023-12-14T05:07:37.027Z^^^class-8",
//         "39^^^100^^^2023-12-14T05:07:37.027Z^^^class-8"
//       ],
//       "studentId": 1
//     }
//   ]
// }