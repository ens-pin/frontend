"use client"
import BubbleChart from "./BubbleChart"

export default function BubbleChartDemo() {
  // Sample data for the bubble chart
  const bubbleData = [
    { label: "React", count: 120, color: "#61DAFB" },
    { label: "JavaScript", count: 150, color: "#F7DF1E" },
    { label: "TypeScript", count: 100, color: "#3178C6" },
    { label: "Next.js", count: 80, color: "#000000" },
    { label: "Tailwind", count: 90, color: "#06B6D4" },
    { label: "Node.js", count: 110, color: "#339933" },
    { label: "GraphQL", count: 70, color: "#E10098" },
    { label: "CSS", count: 95, color: "#1572B6" },
    { label: "HTML", count: 85, color: "#E34F26" },
  ]

  return (
        <BubbleChart data={bubbleData} width={800} height={600} maxBubbleSize={140} />
  )
}

