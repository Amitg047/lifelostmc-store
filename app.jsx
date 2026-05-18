export default function LifelostMCStore() {
  const products = [
    {
      title: 'Dragon Rank',
      price: '$9.99',
      desc: 'Exclusive commands, cosmetics, and premium perks.'
    },
    {
      title: 'Shadow Crate',
      price: '$4.99',
      desc: 'Unlock rare weapons, effects, and legendary rewards.'
    },
    {
      title: '5000 Coins',
      price: '$7.99',
      desc: 'Spend coins on kits, upgrades, and custom items.'
    },
    {
      title: 'PvP Kit Bundle',
      price: '$12.99',
      desc: 'Powerful PvP kits designed for Lifesteal battles.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-black to-black" />

      <header className="relative z-10 border-b border-red-700/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-wider text-red-500">
              LIFELOST MC
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Lifesteal • PvP • Survival
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-semibold text-gray-300">
            <a href="#" className="hover:text-red-500 transition">Home</a>
            <a href="#store" className="hover:text-red-500 transition">Store</a>
            <a href="#ranks" className="hover:text-red-500 transition">Ranks</a>
            <a href="#discord" className="hover:text-red-500 transition">Discord</a>
          </nav>
        </div>
      </header>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-4 py-2 rounded-full border border-red-700/40 bg-red-900/20 text-red-400 text-sm mb-6">
            #1 Lifesteal Experience
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            ENTER THE
            <span className="block text-red-500">LIFELOST</span>
            BATTLEFIELD
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
            Fight enemies, steal hearts, unlock powerful ranks, and dominate the server with legendary kits and crates.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-red-600 hover:bg-red-500 transition px-8 py-4 rounded-2xl font-bold shadow-2xl shadow-red-900/40">
              PLAY NOW
            </button>

            <button className="border border-red-700/40 hover:border-red-500 transition px-8 py-4 rounded-2xl font-bold bg-black/40">
              VIEW STORE
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="bg-zinc-900/70 border border-red-900/30 rounded-2xl p-5 text-center">
              <h3 className="text-3xl font-black text-red-500">5K+</h3>
              <p className="text-gray-400 text-sm mt-1">Players</p>
            </div>

            <div className="bg-zinc-900/70 border border-red-900/30 rounded-2xl p-5 text-center">
              <h3 className="text-3xl font-black text-red-500">24/7</h3>
              <p className="text-gray-400 text-sm mt-1">Online</p>
            </div>

            <div className="bg-zinc-900/70 border border-red-900/30 rounded-2xl p-5 text-center">
              <h3 className="text-3xl font-black text-red-500">99%</h3>
              <p className="text-gray-400 text-sm mt-1">Uptime</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute w-96 h-96 bg-red-700/20 blur-3xl rounded-full" />

          <div className="relative bg-zinc-900/80 border border-red-800/40 rounded-[32px] p-8 shadow-2xl shadow-red-900/20 backdrop-blur-xl w-full max-w-md">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-red-600 to-black flex items-center justify-center text-7xl font-black border border-red-500/20">
              LM
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-black">Lifelost MC</h3>
              <p className="text-gray-400 mt-2">
                Premium Lifesteal Minecraft Server
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between bg-black/40 rounded-2xl p-4 border border-red-900/30">
              <div>
                <p className="text-gray-500 text-sm">Server IP</p>
                <p className="font-bold text-red-400">play.lifelostmc.net</p>
              </div>

              <button className="bg-red-600 hover:bg-red-500 transition px-5 py-2 rounded-xl font-bold">
                Copy
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="store" className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-black">SERVER STORE</h2>
            <p className="text-gray-400 mt-2">
              Purchase ranks, crates, kits, and coins.
            </p>
          </div>

          <button className="hidden md:block border border-red-700/40 hover:border-red-500 px-6 py-3 rounded-2xl font-bold transition">
            OPEN STORE
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="group bg-zinc-900/70 border border-red-900/30 hover:border-red-500/40 transition-all duration-300 rounded-3xl p-6 hover:-translate-y-2"
            >
              <div className="h-40 rounded-2xl bg-gradient-to-br from-red-700 to-black border border-red-500/20 flex items-center justify-center text-4xl font-black">
                {item.title.charAt(0)}
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-black group-hover:text-red-500 transition">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-2xl font-black text-red-500">
                    {item.price}
                  </span>

                  <button className="bg-red-600 hover:bg-red-500 transition px-5 py-2 rounded-xl font-bold text-sm">
                    BUY
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-red-900/30 to-black border border-red-900/40 rounded-[32px] p-10 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black">
            JOIN THE WAR TODAY
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
            Build alliances, steal hearts, and become the strongest player on Lifelost MC.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
            <button className="bg-red-600 hover:bg-red-500 transition px-8 py-4 rounded-2xl font-black shadow-2xl shadow-red-900/30">
              START PLAYING
            </button>

            <button className="border border-red-700/40 hover:border-red-500 transition px-8 py-4 rounded-2xl font-black bg-black/40">
              JOIN DISCORD
            </button>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-red-900/30 py-8 text-center text-gray-500 text-sm">
        © 2026 Lifelost MC • All Rights Reserved
      </footer>
    </div>
  );
}
