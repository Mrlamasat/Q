import React from "react";

function DailyPart({ part, marked, onMark }) {
  return (
    <div className={`p-4 rounded shadow ${marked ? "bg-green-100" : "bg-white"}`}>
      <h2 className="text-xl font-semibold mb-2">{part.reader}</h2>
      <p>من سورة {part.startSurah} آية {part.startVerse}</p>
      <p>إلى سورة {part.endSurah} آية {part.endVerse}</p>
      <button
        onClick={onMark}
        className={`mt-3 px-4 py-2 rounded ${marked ? "bg-red-500 text-white" : "bg-blue-500 text-white"}`}
      >
        {marked ? "تم الإكمال" : "تأشير القراءة"}
      </button>
    </div>
  );
}

export default DailyPart;
