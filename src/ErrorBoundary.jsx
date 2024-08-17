import { getValue } from "@utils/lodash";
import React from "react";
class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { error: null, errorInfo: null };
	}

	componentDidCatch(error, errorInfo) {
		// Catch errors in any components below and re-render with error message
		this.setState({
			error: error,
			errorInfo: errorInfo,
		});
		// You can also log error messages to an error reporting service here
	}

	redirect = (type) => {
		if (type === 1) {
			window.location.href = "/dashboard/compliance";
		} else {
			window.location.reload();
		}
	};

	render() {
		if (this.state.errorInfo) {
			// Error path
			return (
				<>
					<header className="header-wrapper">
						<div className="container-fluid d-flex align-items-center justify-content-between">
							<div className="d-flex align-items-center cursor-pointer">

								<img
									src={
										"/images/rapid-sales-logo.svg"
									}
									width="173"
									height="52"
									className="img-fluid header-wrapper__logo"
									alt='test'
								/>
							</div>
						</div>
					</header>
					<div
						style={{
							margin: 0,
							width: "100%",
							display: "flex",
							justifyContent: "center",
							textAlign: "center",
							marginTop: "30vh",
						}}
					>
						<div className="login-ext">
							<div className="logo">
								<a href="/">
									{/* <img src="/images/rapid-sales-logo.svg" alt="Logo" /> */}
									<img
										src={"/images/rapid-sales-logo.svg"
										}
										alt="Logo"
										style={{ height: "200px", width: "200px" }}
									/>
								</a>
							</div>
							<div className="d-table d-table__middle">
								<div>
									<form autoComplete="off">
										<div className="center-content">
											<h2>Something’s gone wrong on our end.</h2>
											<p>
												We’re working feverishly to sort it out. Give us a
												couple minutes and try again.
												{/* Or call our customer support at 080 4112 2009 if you need immediate assistance. */}
												Thank You.
											</p>
											<div className="btn-group-margin">
												<a className="btn" href="/">
													Go home
												</a>
												&nbsp;
												<button
													className="btn"
													onClick={(e) => this.redirect(2)}
												>
													Try Again
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>

						{/* <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details> */}
					</div>
				</>
			);
		}
		// Normally, just render children
		return this.props.children;
	}
}
export default ErrorBoundary;
