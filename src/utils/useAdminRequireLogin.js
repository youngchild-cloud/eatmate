import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const useAdminRequireLogin = () => {
  const hasCheckedAuth = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (hasCheckedAuth.current) return;
    hasCheckedAuth.current = true;

    const token = localStorage.getItem('adminToken');

    if (!token) {
      alert('로그인 후 사용 가능합니다.');
      navigate('/admin/login');
    }
  }, [navigate]);
};
