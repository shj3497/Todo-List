const testObject = {'one':1,'two':2,'three':3};

// Put the object info storage, String으로 json데이터 변환후 저장
localStorage.setItem('testObject',JSON.stringify(testObject));

// Retrieve the object from storage, 담겨져 있는 데이터 가져오기
const retrievedObject = localStorage.getItem('testObject');
console.log(retrievedObject);

// Object로 데이터를 파싱
console.log(`retrievedObject >>> : ${JSON.parse(retrievedObject)}`);
