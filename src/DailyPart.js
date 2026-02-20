import React from "react";

function DailyPart({ part, marked, onMark }) {
  return (
    <div className={`p-6 rounded shadow w-full md:w-1/2 ${marked ? "bg-green-100" : "bg-white"}`}>
      <h2 className="text-2xl font-semibold mb-3">{part.reader}</h2>
      <p className="mb-1">
        من سورة <strong>{part.startSurah}</strong> آية {part.startVerse}
      </p>
      <p className="mb-3">
        إلى سورة <strong>{part.endSurah}</strong> آية {part.endVerse || "نهاية السورة"}
      </p>
      <button
        onClick={onMark}
        className={`px-5 py-2 rounded ${marked ? "bg-red-500 text-white" : "bg-blue-500 text-white"}`}
      >
        {marked ? "تم الإكمال" : "تأشير القراءة"}
      </button>
    </div>
  );
}

export default DailyPart;
