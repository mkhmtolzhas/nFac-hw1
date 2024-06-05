import Card from "./components/layout/Card";
// app.js
const data = require('../../data/data.json');




export default function Home() {
  return (
    <main className="bg-[#F5F8FA]">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-12 md:p-18" >
        {data.map(cards => <Card id={cards.id} date={cards.date} mentor={cards.author} title={cards.title} description={cards.description}/>)}
      </section>
    </main>
  );
}
