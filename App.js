import React, { useState, useEffect } from "react";
import DailyPart from "./DailyPart";

// بيانات تجريبية للورد اليومي (يمكن استبدالها بقاعدة بيانات لاحقًا)
const dailyParts = [
  { id: 1, reader: "شاغر 13", startVerse: 1, endVerse: 141, startSurah: "الفاتحة", endSurah: "البقرة" },
  { id: 2, reader: "ريان", startVerse: 142, endVerse: 252, startSurah: "البقرة", endSurah: "البقرة" },
  { id: 3, reader: "وليد العفيري", startVerse: 253, endVerse: 92, startSurah: "البقرة", endSurah: "آل عمران" },
  // أضف باقي الأجزاء هنا
];

function App() {
  const [marks, setMarks] = useState({});

  // تحميل التأشير من localStorage (محاكاة للقاعدة)
  useEffect(() => {
    const savedMarks = JSON.parse(localStorage.getItem("marks")) || {};
    setMarks(savedMarks);
  }, []);

  // تحديث التأشير
  const handleMark = (id) => {
    const updated = { ...marks, [id]: !marks[id] };
    setMarks(updated);
    localStorage.setItem("marks", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">الورد اليومي لشهر رمضان</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dailyParts.map(part => (
          <DailyPart
            key={part.id}
            part={part}
            marked={marks[part.id] || false}
            onMark={() => handleMark(part.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
