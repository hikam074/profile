// SvgIcon.jsx
export default function SvgIcon({ icon, size = 40, className = '' }) {
  const isSvgElement = icon && typeof icon === 'object' && icon.type === 'svg';
  const isImagePath = icon && typeof icon === 'string';

  return (
    <div
      className={`w-auto h-[${size}px] max-w-full flex items-center justify-center ${className}`}
    >
      {isSvgElement && (
        <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full">
          {icon}
        </div>
      )}

      {isImagePath && (
        <img src={icon} alt="icon" loading="lazy"
          className="w-full h-full object-contain"
        />
      )}
    </div>
  );
}
