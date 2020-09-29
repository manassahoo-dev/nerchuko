import Head from 'next/head'
export default function Home() {
  return (
    <div>
      <main>
        <h1 className="display- text-center py-4 mt-4 font-weight-bold ">Welcome to <span className="text-primary">Nerchuko!</span></h1>
        <h2 className="text-center mb-4">Learn Telugu Easily</h2>

        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title &rarr;</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4"><div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title &rarr;</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div></div>
            <div className="col-12 col-md-4"><div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div></div>
          </div>
        </div>


      </main>
    </div>
  )
}
