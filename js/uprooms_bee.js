function calculate_end_date()
{
	var $start_date_date = jQuery("input[name='start_date[date]']");
	var $start_date_time = jQuery("input[name='start_date[time]']");

	var $end_date_date = jQuery("input[name='end_date[date]']");
	var $end_date_time = jQuery("input[name='end_date[time]']");

	var $minutes = jQuery("select[name='minutes']");
	var mins = Number($minutes.val());
	var start_date = new Date($start_date_date.val() +" "+ $start_date_time.val());
	end_date = new Date(start_date.toString());
	console.log(start_date);
	console.log("end", end_date);

	//add minutes
	end_date.setMinutes(end_date.getMinutes() + mins);
	console.log("end update", end_date);
	var end_date_date = pad_end_date(end_date.getFullYear())+
		"-"+pad_end_date(end_date.getMonth()+1)+
		"-"+pad_end_date(end_date.getDate());
	console.log(end_date_date);
	
	var end_date_time = pad_end_date(end_date.getHours())+
		":"+pad_end_date(end_date.getMinutes())+
		":"+pad_end_date(end_date.getSeconds());
	$end_date_date.val(end_date_date);
	$end_date_time.val(end_date_time);
	//toString().padStart(2, "0");

}

function pad_end_date(s)
{
	console.log(s);
	return s.toString().padStart(2, "0");
}

jQuery(function(){
	
	//calculate on page load
	calculate_end_date();
	
	var $start_date_date = jQuery("input[name='start_date[date]']");
	var $start_date_time = jQuery("input[name='start_date[time]']");
	var $minutes = jQuery("select[name='minutes']");
	$start_date_date.on('input', calculate_end_date);
	$start_date_time.on('input', calculate_end_date);
	$minutes.on('input', calculate_end_date);
	
});