{

  
// spread operator
  const name: string[] = ["Sakib", "Saim", "Nabil"];
  const name2: string[] = ["Hasib", "Shifat"];
  name.push(...name2);

  const mentors = {
    ts: "Mezba",
    redux: "Mir",
  };

  const mentors2 = {
    prsima: "Firoz",
    next: "Tonmoy",
  };
  const mentorList = { ...mentors, ...mentors2 };

  // learn rest operator
  const greetFriends = (...friends: string[]) => {
    friends.forEach((frined: string) => console.log(`Hi, ${frined}`));
  };
  greetFriends("Sakib", "Saim", "Nabil");

  // destructuring
  const clientList = {
    id: 32,
    name: {
      firstName: "Rakib",
      lastName: "Hasan",
    },
    contactNo: 34284783,
    address: "Bangladesh",
  };

  const {
    contactNo,
    name: { firstName },
  } = clientList;

  // array destructuring
  const myFriends: string[] = ["Shifat", "Hasib", "Chanchal"];
  const [a, b, c] = myFriends;




}
