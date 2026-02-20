import React, { useState, useEffect } from "react";
import DailyPart from "./DailyPart";

// كل الأجزاء الـ30
const dailyParts = [
  { id: 1, reader: "شاغر 13", startVerse: 1, endVerse: 141, startSurah: "الفاتحة", endSurah: "البقرة" },
  { id: 2, reader: "ريان", startVerse: 142, endVerse: 252, startSurah: "البقرة", endSurah: "البقرة" },
  { id: 3, reader: "وليد العفيري", startVerse: 253, endVerse: 92, startSurah: "البقرة", endSurah: "آل عمران" },
  { id: 4, reader: "محمد المحسني", startVerse: 93, endVerse: 23, startSurah: "آل عمران", endSurah: "النساء" },
  { id: 5, reader: "حسن الرفاعي", startVerse: 24, endVerse: 147, startSurah: "النساء", endSurah: "النساء" },
  { id: 6, reader: "أكرم باصالح", startVerse: 148, endVerse: 81, startSurah: "النساء", endSurah: "المائدة" },
  { id: 7, reader: "معن أبو محمد", startVerse: 82, endVerse: 110, startSurah: "المائدة", endSurah: "الأنعام" },
  { id: 8, reader: "نصر أبو محمد", startVerse: 111, endVerse: 87, startSurah: "الأنعام", endSurah: "الأعراف" },
  { id: 9, reader: "أبو إسلام", startVerse: 88, endVerse: 40, startSurah: "الأعراف", endSurah: "الأنفال" },
  { id: 10, reader: "عابد 1", startVerse: 41, endVerse: 92, startSurah: "الأنفال", endSurah: "التوبة" },
  { id: 11, reader: "مختار المقرمي", startVerse: 93, endVerse: 5, startSurah: "التوبة", endSurah: "هود" },
  { id: 12, reader: "حمزة", startVerse: 6, endVerse: 52, startSurah: "هود", endSurah: "يوسف" },
  { id: 13, reader: "ياسر أبو عمار", startVerse: 53, endVerse: 52, startSurah: "يوسف", endSurah: "إبراهيم" },
  { id: 14, reader: "مشتاق", startVerse: 1, endVerse: 0, startSurah: "الحجر", endSurah: "النحل" },
  { id: 15, reader: "أبو محمد الجدي", startVerse: 1, endVerse: 74, startSurah: "الإسراء", endSurah: "الكهف" },
  { id: 16, reader: "محمد المحمدي", startVerse: 75, endVerse: 0, startSurah: "الكهف", endSurah: "طه" },
  { id: 17, reader: "عبدالاله مرجان", startVerse: 1, endVerse: 0, startSurah: "الأنبياء", endSurah: "الحج" },
  { id: 18, reader: "عبدالسلام الرحبي", startVerse: 1, endVerse: 20, startSurah: "المؤمنون", endSurah: "الفرقان" },
  { id: 19, reader: "علي ابوالرجال", startVerse: 21, endVerse: 55, startSurah: "الفرقان", endSurah: "النمل" },
  { id: 20, reader: "رضوان", startVerse: 56, endVerse: 45, startSurah: "النمل", endSurah: "العنكبوت" },
  { id: 21, reader: "سفيان", startVerse: 46, endVerse: 30, startSurah: "العنكبوت", endSurah: "الأحزاب" },
  { id: 22, reader: "عبدالله", startVerse: 31, endVerse: 27, startSurah: "الأحزاب", endSurah: "يس" },
  { id: 23, reader: "مختار سعيد", startVerse: 28, endVerse: 31, startSurah: "يس", endSurah: "الزمر" },
  { id: 24, reader: "أبو ياسر", startVerse: 32, endVerse: 46, startSurah: "الزمر", endSurah: "فصلت" },
  { id: 25, reader: "بانافع", startVerse: 47, endVerse: 0, startSurah: "فصلت", endSurah: "الجاثية" },
  { id: 26, reader: "أسعد", startVerse: 1, endVerse: 30, startSurah: "الأحقاف", endSurah: "الذاريات" },
  { id: 27, reader: "أمين", startVerse: 31, endVerse: 0, startSurah: "الذاريات", endSurah: "الحديد" },
  { id: 28, reader: "عمار ياسر", startVerse: 1, endVerse: 0, startSurah: "المجادلة", endSurah: "التحريم" },
  { id: 29, reader: "عمار بن ياسر", startVerse: 1, endVerse: 0, startSurah: "تبارك", endSurah: "المرسلات" },
  { id: 30, reader: "أبو بكر", startVerse: 1, endVerse: 0, startSurah: "النبأ", endSurah: "الناس" }
];

function App() {
  const [marks, setMarks] = useState({});
  const [todayPart, setTodayPart] = useState(null);

  useEffect(() => {
    const savedMarks = JSON.parse(localStorage.getItem("marks")) || {};
    setMarks(savedMarks);

    // حساب اليوم الحالي من رمضان باستخدام JavaScript فقط
    const ramadanStart = new Date(2026, 3, 1); // 1 أبريل 2026 (تعديل حسب الرؤية)
    const today = new Date();
    const diffTime = today - ramadanStart;
    const ramadanDay = diffTime >= 0 && diffTime < 30*24*60*60*1000
      ? Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1
      : null;

    if (ramadanDay && dailyParts[ramadanDay - 1]) {
      setTodayPart(dailyParts[ramadanDay - 1]);
    }
  }, []);

  const handleMark = (id) => {
    const updated = { ...marks, [id]: !marks[id] };
    setMarks(updated);
    localStorage.setItem("marks", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">الورد اليومي لشهر رمضان</h1>
      {todayPart && (
        <DailyPart part={todayPart} marked={marks[todayPart.id] || false} onMark={() => handleMark(todayPart.id)} />
      )}

      <div className="mt-10 w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-center">قائمة التأشير لكل الأعضاء</h2>
        <ul className="space-y-2">
          {dailyParts.map((part) => (
            <li
              key={part.id}
              className={`p-2 rounded flex justify-between ${marks[part.id] ? "bg-green-100" : "bg-white"}`}
            >
              <span>{part.reader}</span>
              <span>{marks[part.id] ? "✅" : "❌"}</span>
            </li>
          ))}
        </ul>
      </div>
