import type { Country } from "@/app/page";
import Link from "next/link";

async function getCountryByName(name: string): Promise<Country>  {
  const response = await fetch (`https://restcountries.com/v3.1/name/${name}?fullText=true`)
  return (await response.json())[0]
}

export default async function countryPage( {params: { name } }: {params: { name: string } }) {
  const country = await getCountryByName(name)
  return (
    <section className="container flex flex-col">
      <h1 className="text-5xl text-center font-bold text-gray-800 my-16">{country.translations.por.common}</h1>
      <Link href="/">{'<-Voltar'}</Link>
      <article className="container flex flex-row justify-between min-w-full p-10 bg-white rounded-xl">
        <section>
          <h2 className="text-xl text-gray-800 mt-2"><b>Capital:</b> {country.capital}</h2>
          <h2 className="text-xl text-gray-800 mt-2"><b>Region:</b> {country.region} - {country.subregion}</h2>
          <h2 className="text-xl text-gray-800 mt-2"><b>Population:</b> {country.population}</h2>
          <h2 className="text-xl text-gray-800 mt-2"><b>Languages:</b> {Object.values(country.languages).map((language) => (
            <span key={language} className="inline-block p-2 bg-indigo-300 mr-2 text-white text-sm rounded-full">{language}</span>
          ))}</h2>
        </section>
      </article>
    </section>

  )
}