function SinginPage({ params }) {
  console.log(params);
  return <div className="text-7xl">SignInpage</div>;
}

export default SinginPage;

//จะได้ผลลัพธ์ { 'sing-in': 'sinaslkfj' }
//...singin ได้ผลลัพธ์จากหลังมาหมดเลย { 'sing-in': [ 'sign-in', '54646' ] }
//ถ้าไม่อยากแสดง url หลัง auth ก้ใส่ [[ ]]
