var totals = [];

function runningTotal(tot) {
    var sum = 0;
    tot.forEach(function(i) {
        sum += i;
    });
    return sum;
}

function calcAverage(x, y) {
    return Math.round(x / y.length);
}



if (score < calcAverage(runningTotal(totals), totals)) {
    <tr class="danger">
    <% var dateString = score.date.slice(0,24) %>
    <td><%= dateString %></td>
    <td><%= score.target_type %></td>
    <td><%= score.scores; %></td>
    <td><%= totalScores(score.scores) %></td></tr>
}