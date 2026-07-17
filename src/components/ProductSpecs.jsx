/**
 * ProductSpecs
 *
 * Renders a list of { label, value } spec pairs as a two-column table.
 *
 * Props:
 *   specs — Array<{ label: string, value: string }>
 */
function ProductSpecs({ specs = [] }) {
  if (!specs.length) return null;

  return (
    <div className="specs-section">
      <h3 className="specs-title">Key Specifications</h3>
      <div className="specs-table">
        {specs.map((spec, i) => (
          <div key={i} className="spec-row">
            <span className="spec-label">{spec.label}</span>
            <span className="spec-value">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSpecs;
