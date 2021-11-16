const imageAddr =
	"https://upload.wikimedia.org/wikipedia/commons/a/a6/Brandenburger_Tor_abends.jpg";
const downloadSize = 2707459; // this must match with the image above

let startTime, endTime;

export default async function measureConnectionSpeed() {
	startTime = new Date().getTime();
	const cacheBuster = "?nnn=" + startTime;

	const download = new Image();
	download.src = imageAddr + cacheBuster;
	// this returns when the image is finished downloading
	await download.decode();
	endTime = new Date().getTime();
	const duration = (endTime - startTime) / 1000;
	const bitsLoaded = downloadSize * 8;
	const speedBps = (bitsLoaded / duration).toFixed(2);
	const speedKbps = (speedBps / 1024).toFixed(2);
	const speedMbps = (speedKbps / 1024).toFixed(2);
	return Number(speedMbps);
}
