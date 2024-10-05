type UserCardProps = {
    title: string;
    value: string;
    change: string;
    changeDirection: 'up' | 'down';
    date:string;
  };
  
  const UseryCard = ({ title, value, change, changeDirection,date }: UserCardProps) => {
    return (
     
         <div className="p-4 border rounded-lg  bg-white flex flex-col justify-evenly mb-4 shadow-2xl overflow-auto">
         <h3 className="sm:text-sm lg:text-lg md:font-medium  text-gray-700">{title}</h3>
         <div className="sm:text-2xl lg:text-4xl font-bold text-gray-900">{value}</div>
         <div className={`sm:text-sm lg:text-lg  ${changeDirection === 'up' ? 'text-green-500' : 'text-red-500'}`}>
           {changeDirection === 'up' ? '↑' : '↓'} {change}
         </div>
         <div className="sm:text-sm lg:text-lg md:font-medium  text-gray-700">{date}</div>

       </div>
    );
  };
  
  const UserCountCard = () => {
    return (
      <div className=" w-full h-64 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 shadow-2xl">
        <UseryCard title="user counts" value="Rp68.250.000" change="5%" changeDirection="up" date=" last 30 day " />
        <UseryCard title="post conunts" value="Rp52.755.500" change="2.2%" changeDirection="up" date=" last 10 day "/>
        <UseryCard title="post views" value="57.251" change="9.3%" changeDirection="up" date=" last 60 day "/>
        <UseryCard title="toatal sharers " value="57.251" change="9.3%" changeDirection="up" date=" last 20 day "/>

      </div>
    );
  };
  
  export default UserCountCard;
  