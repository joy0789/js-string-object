const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['Science fair', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}
console.log(college);
console.log(college.unique);
console.log(college.unique.color);
console.log(college.unique.result);
console.log(college.unique.result.gpa);

// for delete anything
delete college.unique;
console.log(college);
