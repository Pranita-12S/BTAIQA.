



import React from "react";

function TestCaseTable({ testCases }) {
  if (!testCases || testCases.length === 0) return null;

  // ---- CSV Export (safe with quotes/commas/newlines) ----
  const toCsvValue = (v) => {
    if (v == null) return "";
    const s = String(v).replace(/"/g, '""');
    return `"${s}"`;
  };

  const exportCSV = () => {
    const headers = ["Test Case", "Description", "Steps", "Expected Result"];
    const rows = testCases.map((tc) => [
      tc.name,
      tc.description,
      tc.steps,
      tc.expected,
    ]);

    const lines = [
      headers.map(toCsvValue).join(","),
      ...rows.map((r) => r.map(toCsvValue).join(",")),
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "test_cases.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  // ---- PDF Export (robust with dynamic import) ----
  const exportPDF = async () => {
    // dynamic import avoids plugin registration issues
    const { default: jsPDF } = await import("jspdf");
    const autoTable = (await import("jspdf-autotable")).default;

    const doc = new jsPDF({ unit: "pt", format: "a4" }); // pt = points (good for layout)
    const marginX = 40;
    const startY = 50;

    doc.setFontSize(14);
    doc.text("Generated Test Cases", marginX, startY);

    const head = [["Test Case", "Description", "Steps", "Expected Result"]];
    const body = testCases.map((tc) => [
      tc.name,
      tc.description,
      tc.steps,
      tc.expected,
    ]);

    autoTable(doc, {
      head,
      body,
      startY: startY + 12,
      margin: { left: marginX, right: marginX },
      styles: {
        fontSize: 10,
        cellPadding: 6,
        overflow: "linebreak",
      },
      headStyles: { fillColor: [229, 231, 235] }, // light gray header
      columnStyles: {
        0: { cellWidth: 110 }, // Test Case
        1: { cellWidth: 160 }, // Description
        2: { cellWidth: 180 }, // Steps
        3: { cellWidth: 160 }, // Expected
      },
      // If content exceeds one page, autotable will paginate automatically
      didDrawPage: (data) => {
        // Optional footer
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        doc.setFontSize(9);
        doc.text(
          `Page ${doc.getNumberOfPages()}`,
          pageWidth - marginX,
          pageHeight - 10,
          { align: "right" }
        );
      },
    });

    doc.save("test_cases.pdf");
  };

  return (
    <div className="mt-6">
      <h3 className="font-semibold text-lg mb-3">Generated Test Cases</h3>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-3 py-2 table-text-lg">Test Case</th>
              <th className="border px-3 py-2">Description</th>
              <th className="border px-3 py-2">Steps</th>
              <th className="border px-3 py-2">Expected Result</th>
            </tr>
          </thead>







          <tbody>
            {testCases.map((tc) => (
              <tr key={tc.id}>
               {/* <td className="border px-3 py-2">{tc.name}</td> */}
               <td className="border px-3 py-2 table-text-lg">{tc.name}</td>

                <td className="border px-3 py-2">{tc.description}</td>
                <td className="border px-3 py-2">{tc.steps}</td>
                <td className="border px-3 py-2">{tc.expected}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end space-x-3 mt-3">
        <button className="border px-3 py-1 rounded hover:bg-gray-100" onClick={exportCSV}>
          Export CSV
        </button>
        <button className="border px-3 py-1 rounded hover:bg-gray-100" onClick={exportPDF}>
          Export PDF
        </button>
      </div>
    </div>
  );
}

export default TestCaseTable;


