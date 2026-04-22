export default function Filters({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort
}) {
  return (
    <div className="card" style={{ marginBottom: "20px" }}>

      {/* 🔍 ПОШУК */}
      <input
        className="input"
        placeholder="Пошук..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📂 КАТЕГОРІЇ */}
      <select
        className="input"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Всі категорії</option>
        <option value="phones">Телефони</option>
        <option value="laptops">Ноутбуки</option>
        <option value="gold">Золото</option>
      </select>

      {/* 💰 СОРТУВАННЯ */}
      <select
        className="input"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Сортувати</option>
        <option value="cheap">Дешеві</option>
        <option value="expensive">Дорогі</option>
      </select>

    </div>
  );
}