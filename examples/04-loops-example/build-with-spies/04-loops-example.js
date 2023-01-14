// BEGIN_WEENIFY_BOILERPLATE
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.numSpies = W.numSpies || {};
W.numSpies['8tdzor'] = 4;
W.spyResults = W.spyResults || {};
W.spyResults['8tdzor'] = [];
W.spyCalls = W.spyCalls || {};
W.spyCalls['8tdzor'] = new Set();
W.spy = W.spy || function weenifySpy(id) {
    const [ pathHash, index ] = id.split('-');
        W.spyCalls[pathHash].add(+index);
};
W.scan = W.scan || function weenifyScan() {
    for (const pathHash in W.spyCalls) {
        for (let i=0; i<W.numSpies[pathHash]; i++) {
            W.spyResults[pathHash].push(
                W.spyCalls[pathHash].has(i) ? 0 : 1
            );
        }
    }
    let spyResultsLists = [];
    for (const pathHash in W.spyCalls) {
        spyResultsLists.push(`        '${pathHash}': [ ${W.spyResults[pathHash].join()} ]`);
    }
    console.log(
        'const weenifyOptions = {\n' +
        '    spyResults: {\n' +
        spyResultsLists.join(',\n') +
        '\n    },\n' +
        '};'
    );
};
if (! W.didPrepScanCall) {
    setTimeout(() => W.scan(), 10);
    W.didPrepScanCall = true;
}
}(); // end iife
// END_WEENIFY_BOILERPLATE

function loopsForClassic(zero, one, two) {
  for (let i = zero; i < two; i++) {
    WEENIFY.spy('8tdzor-0');
    console.log('First classic for loop (block) - will be used.');
  }
  for (let i = zero; i < two; i++) {
    WEENIFY.spy('8tdzor-1');
    console.log('Second classic for loop (no block) - will also be used.');
  }
  for (let i = two; i < one; i++) {
    WEENIFY.spy('8tdzor-2');
    console.log('Third classic for loop (block) - will not be used.');
  }
  for (let i = two; i < one; i++) {
    WEENIFY.spy('8tdzor-3');
    console.log('Fourth classic for loop (no block) - will also not be used.');
  }
}

// BEGIN_WEENIFY_BOILERPLATE
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.numSpies = W.numSpies || {};
W.numSpies['4s0u2m'] = 4;
W.spyResults = W.spyResults || {};
W.spyResults['4s0u2m'] = [];
W.spyCalls = W.spyCalls || {};
W.spyCalls['4s0u2m'] = new Set();
W.spy = W.spy || function weenifySpy(id) {
    const [ pathHash, index ] = id.split('-');
        W.spyCalls[pathHash].add(+index);
};
W.scan = W.scan || function weenifyScan() {
    for (const pathHash in W.spyCalls) {
        for (let i=0; i<W.numSpies[pathHash]; i++) {
            W.spyResults[pathHash].push(
                W.spyCalls[pathHash].has(i) ? 0 : 1
            );
        }
    }
    let spyResultsLists = [];
    for (const pathHash in W.spyCalls) {
        spyResultsLists.push(`        '${pathHash}': [ ${W.spyResults[pathHash].join()} ]`);
    }
    console.log(
        'const weenifyOptions = {\n' +
        '    spyResults: {\n' +
        spyResultsLists.join(',\n') +
        '\n    },\n' +
        '};'
    );
};
if (! W.didPrepScanCall) {
    setTimeout(() => W.scan(), 10);
    W.didPrepScanCall = true;
}
}(); // end iife
// END_WEENIFY_BOILERPLATE

function loopsForIn(fullObj, emptyObj) {
  for (const key in fullObj) {
    WEENIFY.spy('4s0u2m-0');
    console.log('First for in loop (block) - will be used.', key);
  }
  for (const key in fullObj) {
    WEENIFY.spy('4s0u2m-1');
    console.log('Second for in loop (no block) - will also be used.', key);
  }
  for (const key in emptyObj) {
    WEENIFY.spy('4s0u2m-2');
    console.log('Third for in loop (block) - will not be used.', key);
  }
  for (const key in emptyObj) {
    WEENIFY.spy('4s0u2m-3');
    console.log('Fourth for in loop (no block) - will also not be used.', key);
  }
}

// BEGIN_WEENIFY_BOILERPLATE
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.numSpies = W.numSpies || {};
W.numSpies['4ov6eo'] = 4;
W.spyResults = W.spyResults || {};
W.spyResults['4ov6eo'] = [];
W.spyCalls = W.spyCalls || {};
W.spyCalls['4ov6eo'] = new Set();
W.spy = W.spy || function weenifySpy(id) {
    const [ pathHash, index ] = id.split('-');
        W.spyCalls[pathHash].add(+index);
};
W.scan = W.scan || function weenifyScan() {
    for (const pathHash in W.spyCalls) {
        for (let i=0; i<W.numSpies[pathHash]; i++) {
            W.spyResults[pathHash].push(
                W.spyCalls[pathHash].has(i) ? 0 : 1
            );
        }
    }
    let spyResultsLists = [];
    for (const pathHash in W.spyCalls) {
        spyResultsLists.push(`        '${pathHash}': [ ${W.spyResults[pathHash].join()} ]`);
    }
    console.log(
        'const weenifyOptions = {\n' +
        '    spyResults: {\n' +
        spyResultsLists.join(',\n') +
        '\n    },\n' +
        '};'
    );
};
if (! W.didPrepScanCall) {
    setTimeout(() => W.scan(), 10);
    W.didPrepScanCall = true;
}
}(); // end iife
// END_WEENIFY_BOILERPLATE

function loopsForOf(fullArr, emptyArr) {
  for (const val of fullArr) {
    WEENIFY.spy('4ov6eo-0');
    console.log('First for of loop (block) - will be used.', val);
  }
  for (const val of fullArr) {
    WEENIFY.spy('4ov6eo-1');
    console.log('Second for of loop (no block) - will also be used.', val);
  }
  for (const val of emptyArr) {
    WEENIFY.spy('4ov6eo-2');
    console.log('Third for of loop (block) - will not be used.', val);
  }
  for (const val of emptyArr) {
    WEENIFY.spy('4ov6eo-3');
    console.log('Fourth for of loop (no block) - will also not be used.', val);
  }
}

// BEGIN_WEENIFY_BOILERPLATE
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.numSpies = W.numSpies || {};
W.numSpies['clx9pq'] = 4;
W.spyResults = W.spyResults || {};
W.spyResults['clx9pq'] = [];
W.spyCalls = W.spyCalls || {};
W.spyCalls['clx9pq'] = new Set();
W.spy = W.spy || function weenifySpy(id) {
    const [ pathHash, index ] = id.split('-');
        W.spyCalls[pathHash].add(+index);
};
W.scan = W.scan || function weenifyScan() {
    for (const pathHash in W.spyCalls) {
        for (let i=0; i<W.numSpies[pathHash]; i++) {
            W.spyResults[pathHash].push(
                W.spyCalls[pathHash].has(i) ? 0 : 1
            );
        }
    }
    let spyResultsLists = [];
    for (const pathHash in W.spyCalls) {
        spyResultsLists.push(`        '${pathHash}': [ ${W.spyResults[pathHash].join()} ]`);
    }
    console.log(
        'const weenifyOptions = {\n' +
        '    spyResults: {\n' +
        spyResultsLists.join(',\n') +
        '\n    },\n' +
        '};'
    );
};
if (! W.didPrepScanCall) {
    setTimeout(() => W.scan(), 10);
    W.didPrepScanCall = true;
}
}(); // end iife
// END_WEENIFY_BOILERPLATE

function loopsWhile(a, b) {
  while (a) {
    WEENIFY.spy('clx9pq-0');
    console.log('First and second while loops will both be used.');
    break;
  }
  while (a) {
    WEENIFY.spy('clx9pq-1');
    break;
  }
  while (b) {
    WEENIFY.spy('clx9pq-2');
    console.log('Third and fourth while loops are never actually used.');
    break;
  }
  while (b) {
    WEENIFY.spy('clx9pq-3');
    break;
  }
}

loopsForClassic(0, 1, 2);
loopsForIn({
  a: 0,
  b: 1
}, {});
loopsForOf(['a', 'b'], []);
loopsWhile(true, false);