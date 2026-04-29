import "./filters.css";
export default function Filters({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort
}) {
  return (
    <div className="filters">

      {/* 🔍 ПОШУК */}
      <input
        className="input"
        placeholder="Пошук..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📦 КАТЕГОРІЇ */}
      <select
        className="input"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Всі категорії</option>
        <option value="tech">Техніка</option>
        <option value="gold">Золото</option>
        <option value="silver">Срібло</option>
      </select>

      {/* 🔥 СТАН */}
      <select
        className="input"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Стан</option>
        <option value="used">Б/У</option>
        <option value="new">Нові</option>
      </select>

    </div>
  );
}