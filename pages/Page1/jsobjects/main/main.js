export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async save () {
		if(appsmith.store.edit_mode === 'create'){
			InsertRow.run({
				id: crypto.randomUUID(),
				version: 1,
				summary: summary.text === "" ? null: summary.text		
			})
		}else{
			const res =  await LatestVersion.run({test_vc_id: Table1.triggeredRow.id});
			const version = res[0].latest_version;
			InsertRow.run({
				id: Table1.triggeredRow.id,
				version: version+1,
				summary: summary.text === "" ? null: summary.text
			})
		}
		
		closeModal(Modal1.name);
	}
}