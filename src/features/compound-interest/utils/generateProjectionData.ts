export interface ProjectionPoint {
  year: number
  value: number
}

interface Input {
  principal: number
  rate: number
  years: number
}

export function generateProjectionData({
  principal,
  rate,
  years,
}: Input): ProjectionPoint[] {
  const data: ProjectionPoint[] = []

  for (let year = 1; year <= years; year++) {
    const value =
      principal * Math.pow(1 + rate / 100, year)

    data.push({
      year,
      value: Number(value.toFixed(0)),
    })
  }

  return data
}