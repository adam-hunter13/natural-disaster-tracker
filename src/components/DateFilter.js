import React from 'react'

const DateFilter = ({ startDate, endDate, onStartChange, onEndChange, onApply, onClear }) => {
  return (
    <div className="date-filter">
      <label>
        From:
        <input
          type="date"
          value={startDate}
          onChange={(e) => onStartChange(e.target.value)}
        />
      </label>
      <label>
        To:
        <input
          type="date"
          value={endDate}
          onChange={(e) => onEndChange(e.target.value)}
        />
      </label>
      <button onClick={onApply}>Apply</button>
      <button onClick={onClear}>Clear</button>
    </div>
  )
}

export default DateFilter