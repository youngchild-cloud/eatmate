import { useEffect, useState } from 'react';
import './InputFile.scss';

const InputFile = ({
  name,
  title,
  requiredReq,
  requiredSel,
  maxFiles = 1,
  onFilesChange,
}) => {
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) {
      setPreviews([]);
      onFilesChange && onFilesChange([]);
      return;
    }

    const limited = files.slice(0, maxFiles);

    const urls = limited.map((file) => URL.createObjectURL(file));
    setPreviews(urls);

    onFilesChange && onFilesChange(limited); // 부모에게 파일 전달
  };

  // 메모리 누수 방지(중요)
  useEffect(() => {
    return () => {
      previews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previews]);

  return (
    <div className='common-input-box common-input-box__file'>
      <strong className='label'>
        {requiredReq && <span className='req'>{requiredReq}</span>}
        {requiredSel && <span className='sel'>{requiredSel}</span>}
        {title}
        {maxFiles > 2 ? `(최대 ${maxFiles}장 선택 가능)` : ''}
      </strong>

      <div className="file-wrap">
        <label htmlFor={name}>
          <span className="icon" />
          <span className='txt'>사진</span>
        </label>

        {previews.length > 0 && (
          <div className="preview-wrap">
            {previews.map((src, idx) => (
              <div className='img-box' key={src}>
                <img src={src} alt={`미리보기 ${idx + 1}`} />
              </div>
            ))}
          </div>
        )}

        <input
          type="file"
          id={name}
          name={name}
          accept="image/*"
          multiple={maxFiles > 1}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default InputFile;
