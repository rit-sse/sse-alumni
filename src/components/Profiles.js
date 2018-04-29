import React, { Component } from 'react';

class Profiles extends Component {
	render() {
		return (
			<div class="container">
				<div class="row">
					<div class="col-sm-4 p-0 d-flex align-items-stretch">
						<div class="list-group">
							<a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
							<div class="d-flex w-100 justify-content-between">
								<h5 class="mb-1">John Doe</h5>
								<small>2016</small>
							</div>
							<p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
							<small>Seattle, WA</small>
							</a>
						<a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
							<div class="d-flex w-100 justify-content-between">
								<h5 class="mb-1">Adam Smith</h5>
								<small class="text-muted">2003</small>
							</div>
							<p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
							<small class="text-muted">San Francisco, CA</small>
							</a>
						<a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
							<div class="d-flex w-100 justify-content-between">
								<h5 class="mb-1">Bob Walters</h5>
								<small class="text-muted">2012</small>
							</div>
							<p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
							<small class="text-muted">Boston, MA</small>
							</a>
						</div>
					</div>
					<div class="col-sm-8 p-0 d-flex align-items-stretch">
						<div class="card">
						  <div class="card-body">
						  	<i class="fa fa-user text-dark fa-5x mb-2" aria-hidden="true"></i>
						    <h5 class="card-title text-dark">John Doe</h5>
						    <h6 class="card-subtitle mb-2 text-muted">Seattle, WA. Class of 2016</h6>
						    <p class="card-text text-dark">John Doe graduated in 2016. He co-oped at Microsoft and Facebook. He is currently at IBM and living in the Seattle, WA area.</p>
						    <a href="#" class="card-link text-dark">Github</a>
						    <a href="#" class="card-link text-dark">LinkedIn</a>
						  </div>
						</div>
					</div>
				</div>
			</div>
			);
	}
}

export default Profiles;
