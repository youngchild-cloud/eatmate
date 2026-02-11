import { useEffect, useState } from 'react';
import './InputFile.scss';

const InputFile = ({
  name,
  title,
  RequiredInput,
  SelectInput,
  maxFiles = 1,
  onFilesChange,
  defaultPreview,
  imgUrl = 'user',
}) => {
  const [previews, setPreviews] = useState([]);

  // 기존 이미지 미리보기 세팅
  useEffect(() => {
    if (defaultPreview) {
      // 서버에 저장된 이미지 URL 형태라고 가정
      setPreviews([defaultPreview]);
    }
  }, [defaultPreview]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) {
      setPreviews(defaultPreview ? [defaultPreview] : []);
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
        {RequiredInput && <span className='req'>{RequiredInput}</span>}
        {SelectInput && <span className='sel'>{SelectInput}</span>}
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
                <img
                  src={
                    src.startsWith('blob:')
                      ? src
                      : `http://localhost:9070/uploads/${imgUrl}/${src}`
                  }
                  alt={`미리보기 ${idx + 1}`}
                />
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
        // required={SelectInput ? false : true}
        />
      </div>
    </div>
  );
};

export default InputFile;
