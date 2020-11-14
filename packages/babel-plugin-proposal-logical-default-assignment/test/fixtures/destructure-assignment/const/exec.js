const getState = () => ({ data: { courses: null }});

const { data: { courses: oldCourses ??= [] } = {} } = getState();

expect(oldCourses).toEqual([]);
