import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import './Report.css';

const Report = () => {
  // Table Data
  const data = React.useMemo(
    () => [
      { product: "Tomato", productID: "23567", category: "Vegetable", remaining: "225 kg", turnover: 17000, increase: "2.3%" },
      { product: "Onion", productID: "25831", category: "Vegetable", remaining: "200 kg", turnover: 12000, increase: "1.3%" },
      { product: "Maggi", productID: "56841", category: "Instant Food", remaining: "200 Packet", turnover: 10000, increase: "1.3%" },
      { product: "Surf Excel", productID: "23567", category: "Household", remaining: "125 Packet", turnover: 9000, increase: "1%" },
    ],
    []
  );

  // Table Columns
  const columns = React.useMemo(
    () => [
      { header: "Product", accessorKey: "product" },
      { header: "Product ID", accessorKey: "productID" },
      { header: "Category", accessorKey: "category" },
      { header: "Remaining Quantity", accessorKey: "remaining" },
      { header: "Turn Over", accessorKey: "turnover" },
      { header: "Increase By", accessorKey: "increase" },
    ],
    []
  );

  // Initialize Table
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  // Revenue and Profit Data for Line Chart
  const chartData = [
    { name: "Sep", Revenue: 20000, Profit: 15000 },
    { name: "Oct", Revenue: 35000, Profit: 25000 },
    { name: "Nov", Revenue: 40000, Profit: 30000 },
    { name: "Dec", Revenue: 60000, Profit: 45000 },
    { name: "Jan", Revenue: 70000, Profit: 50000 },
  ];

  return (
    <div className="container">
      <h2 className="title">Product Report</h2>

      {/* Table */}
      <div className="table-container">
        <table className="table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Line Chart */}
      <h2 className="chart-title">Revenue & Profit Trend</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Revenue" stroke="#4F46E5" strokeWidth={2} />
            <Line type="monotone" dataKey="Profit" stroke="#10B981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Report;