const Departments = 
{
    size: 3,
    department: 'computers',
    lead: 'John',
    manager: 'Alex'

}

function* DeparmentIterator(Dep){
   yield Dep.lead;
   yield Dep.manager;
}

for ( let d of DeparmentIterator(Departments)){
    console.log(d);
}