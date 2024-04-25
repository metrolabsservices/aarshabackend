import { ToWords } from "to-words";
export const CustomObjectOptimize = async (data: any) => {
  const toWords = new ToWords();
  let words = toWords.convert(data.feeAdd.paidAmount, {
    currency: true,
    ignoreDecimal: true,
  });
  let subject = data.studentDetailsById.subjectsTaken;
  subject = subject.join(", ");
  return {
    "1": String(data.feeAdd.id),
    "2": String(data.transactionAddon.id),
    "3": new Date(data.transactionAddon.dateOfPayment).toDateString(),
    "4": data.studentDetailsById.name,
    "5": data.studentDetailsById.classNo,
    "6": data.studentDetailsById.timing + "Hrs",
    "7": subject,
    "8": words,
    "9": "Rs " + String(data.feeAdd.paidAmount) + "/-",
    "10":
      data.studentDetailsById.dueAmount == 0
        ? "No dues outstanding. All payments up to date "
        : String(data.studentDetailsById.dueAmount),
  };
};

//  fee id, trx id, date, stu name, clss, time, subj, fee paid word, paid , balace
