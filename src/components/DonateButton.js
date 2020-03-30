import React from 'react';

const DonateButton = () => {
	return (
		<div>
			<a
				href="https://www.pmindia.gov.in"
				target="_blank"
				rel="noopener noreferrer"
				className="ui animated fade orange button big spacer-sm"
			>
				<div className="visible content">
					<span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
						🇮🇳
					</span>{' '}
					Donate to PM CARES Account
				</div>
				<div className="hidden content">
					<span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
						🙏
					</span>{' '}
					Ek choti rashi desh ke liye
				</div>
			</a>
			<a
				href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
				target="_blank"
				rel="noopener noreferrer"
				className="ui animated fade orange basic button big spacer-sm"
			>
				<div className="visible content">
					<span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
						👉🏻
					</span>{' '}
					Advice for the public
				</div>
				<div className="hidden content">Basic protective measures</div>
			</a>
		</div>
	);
};

export default DonateButton;
