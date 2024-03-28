import { Company } from 'types'

function toCountIndustry(companies: Company[]): Record<string, number> {
  return companies.reduce(
    (acc, company) => {
      if (acc[company.industry]) {
        acc[company.industry]++
      } else {
        acc[company.industry] = 1
      }
      return acc
    },
    {} as Record<string, number>
  )
}
function toCountCountry(companies: Company[]): Record<string, number> {
  return companies.reduce(
    (acc, company) => {
      if (acc[company.country]) {
        acc[company.country]++
      } else {
        acc[company.country] = 1
      }
      return acc
    },
    {} as Record<string, number>
  )
}

export { toCountCountry, toCountIndustry }
