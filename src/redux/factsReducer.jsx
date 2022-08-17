const initState = {
	facts: [
		{ id: '1', title: 'Internet storage holds at least 1,200 petabytes worth of data.', body: 'This estimate is equivalent to 1.2 billion terabytes. This number is only an estimation between the big 4 - Google, Facebook, Microsoft, and Amazon.<br>This figure is also still exclusive of other bigtime providers such as Dropbox, SugarSync, and Barracuda.' },
		{ id: '2', title: 'Each day, about 4,000 ransomware attacks are executed.', body: 'The average amount that perpetrators demand after an attack is $1,077.' },
		{ id: '3', title: 'Currently, there are approximately 4.9 billion internet users', body: 'According to Statista Research Department, the global number of internet users in 2021 was 4.9 billion, up from 4.6 billion in 2020.' }
	]
}

const factsReducer = (state = initState, action) => {
	return state;
}

export default factsReducer