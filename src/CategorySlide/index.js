import './index.css'

const CategorySlide = props => {
  const {category, isActive, setActiveTabId} = props

  const onClickTabItem = () => {
    setActiveTabId(category)
  }
  const activeButtonClass = isActive ? 'active-btn' : ''

  return (
    <div className="tab-item">
    
      <button
        type="button"
        className={`tab-button ${activeButtonClass}`}
        onClick={onClickTabItem}
      >
        {category}
      </button>
      </div>
  )
}
export default CategorySlide
